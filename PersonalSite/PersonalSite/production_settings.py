from settings import *

f = open(PROJECT_ROOT+'/password.csv','r')
password = {}
for line in f:
	entry = line.split(',')
	if len(entry) == 2:
		password[entry[0]]=entry[1].replace('\n','')

DEBUG = TEMPLATE_DEBUG = False

DATABASES['default']['ENGINE'] = 'django.db.backends.postgresql_psycopg2'
DATABASES['default']['NAME'] = 'personal_site_db'
DATABASES['default']['USER'] = 'joe_yuan'
DATABASES['default']['PASSWORD'] = password['db']

ALLOWED_HOSTS = ['www.joeyuan.com','joeyuan.com']

STATICFILES_DIRS += (
	'/home/joeyuan19/webapps/personal_site_django_app/flaming-bear/PersonalSite/static/',
)

EMAIL_HOST = 'smtp.webfaction.com'
EMAIL_HOST_USER = 'joe_inbox'
EMAIL_HOST_PASSWORD = password['email']
DEFAULT_FROM_EMAIL = 'joe.yuan19@gmail.com'
SERVER_EMAIL = 'joe@joeyuan.com'

