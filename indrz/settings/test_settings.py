# Copyright (C) 2014-2016 Michael Diener <m.diener@gomogi.com>
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

from .dev_settings import *


# DATABASES = {
#     "default": {
#         # "ENGINE": "django.db.backends.sqlite3",
#         "ENGINE": "django.contrib.gis.db.backends.spatialite",
#         "NAME": ":memory:",
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'test_db',
        'USER': 'postgres',
        'PASSWORD': 'air',
        'HOST': 'localhost',
        'PORT': '5434',
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.locmem.EmailBackend'
POSTGIS_VERSION = "2.2.2"
