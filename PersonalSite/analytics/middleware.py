from analytics.models import Visit, Visitor


BLACK_LIST_URLS = ['admin','static','favicon']

# Helper Methods

def get_request_url(request):
    try:
        path = request.get_full_path()
    except:
        path = "MO PATH AVAILABLE"
    return path


def get_user_agent(request):
    try:
        return request.META.get('HTTP_USER_AGENT')
    except:
        return 'NO USER AGENT AVAILABLE'


def get_client_ip(request):
    ip = '-1.-1.-1.-1'
    try:
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
    except:
        # default
        ip = '-1.-1.-1.-1'
        return ip
    return ip


class RegisterPageView(object):
    def process_request(self, request):
        page_url = get_request_url(request)
        # Do not makes records for unwanted site areas
        for url in BLACK_LIST_URLS:
            if url in page_url:
                return
        ip = get_client_ip(request)
        try:
            # Old Visitor
            visitor = Visitor.objects.get(ip=ip)
            previous_visits = visitor.visits.filter(visit__url=page_url)
            if len(previous_visits) > 0:
                if datetime.datetime.today() - timedelta(seconds=10) > previous_visits.visits[-1].date:
                    # Non-recent visit
                    visitor.visits.create(
                            url=page_url,
                            visitor=visitor
                            )
                    visitor.save()
                else:
                    # Recent-visit don't re-record
                    pass

        except:
            # New Visitor
            visitor = Visitor(
                    ip=ip,
                    user_agent=get_user_agent(request)
                    )
            visitor.save()
            visitor.visits.create(
                    url=page_url,
                    visitor=visitor
                    )
            visitor.save()



