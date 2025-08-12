from django.contrib import admin
from .models import Product

@admin.register(Product)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'created_at')
    list_filter = ('name', 'slug')
   
