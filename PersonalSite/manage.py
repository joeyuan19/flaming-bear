#!/usr/bin/env python
import os
import sys
import socket

if __name__ == "__main__":
    if socket.gethostname() == 'web425.webfaction.com':
		os.environ.setdefault("DJANGO_SETTINGS_MODULE", "PersonalSite.production_settings")
    else:
    	os.environ.setdefault("DJANGO_SETTINGS_MODULE", "PersonalSite.development_settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
