from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username','email','is_professor','is_staff')
    fieldsets = UserAdmin.fieldsets +(
        ('Adicional Information',{'fields': ('is_professor','complete_name')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Adicional Information',{'fields': ('is_professor',"complete_name")}),
    )

admin.site.register(CustomUser, CustomUserAdmin)