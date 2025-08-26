# admin.py
from django.contrib import admin
from .models import Product, Customer, Order, OrderItem, Cart, CartItem


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "created_at", "updated_at")
    search_fields = ("name", "description")
    list_filter = ("created_at", "updated_at")
    ordering = ("-created_at",)


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "address")
    search_fields = ("name", "email")


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("reference", "customer", "total", "status", "created_at")
    search_fields = ("reference", "customer__name", "customer__email")
    list_filter = ("status", "created_at")
    ordering = ("-created_at",)


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("order", "product", "quantity", "price", "subtotal")
    search_fields = ("order__reference", "product__name")


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ("session_id", "created_at")
    search_fields = ("session_id",)


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ("cart", "product", "quantity")
    search_fields = ("cart__session_id", "product__name")
