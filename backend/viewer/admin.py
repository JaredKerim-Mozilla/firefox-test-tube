from django.contrib.admin import AdminSite
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

from .api.admin import MetricAdmin
from .api.models import Metric


class ViewerAdminSite(AdminSite):
    site_header = 'Experiments Viewer administration'


admin_site = ViewerAdminSite()
admin_site.register(Metric, MetricAdmin)
admin_site.register(User, UserAdmin)
