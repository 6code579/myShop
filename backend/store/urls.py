from django.urls import path
from .views import ProductList, ProductDetail

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<slug:slug>/', ProductDetail.as_view(), name='product-detail'),
]
