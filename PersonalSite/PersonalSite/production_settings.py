from development_settings import *

password = {}
try:
	f = open(PROJECT_ROOT+'/extras/password.csv','r')
	for line in f:
		entry = line.split(',')
		if len(entry) == 2:
			password[entry[0]]=entry[1].replace('\n','')
except:
	pass


DEBUG = TEMPLATE_DEBUG = False

DATABASES['default']['ENGINE'] = 'django.db.backends.postgresql_psycopg2'
DATABASES['default']['NAME'] = 'personal_site_db'
DATABASES['default']['USER'] = 'joe_yuan'
try:
	DATABASES['default']['PASSWORD'] = password['db']
except:
	DATABASES['default']['PASSWORD'] = ''
	

ALLOWED_HOSTS = ['www.joeyuan.com','joeyuan.com']

STATICFILES_DIRS += (
	'/home/joeyuan19/webapps/personal_site_django_app/flaming-bear/PersonalSite/static/',
)

EMAIL_HOST = 'smtp.webfaction.com'
EMAIL_HOST_USER = 'joe_inbox'
try:
	EMAIL_HOST_PASSWORD = password['email']
except:
	EMAIL_HOST_PASSWORD = ''

DEFAULT_FROM_EMAIL = 'joe.yuan19@gmail.com'
SERVER_EMAIL = 'joe@joeyuan.com'

