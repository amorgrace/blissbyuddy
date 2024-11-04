from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('products/', views.products, name='products'),
    path('wishlist/', views.wishlist, name='wishlist'),
    path('account/login/', views.login_user, name='login'),
    path('account/logout/', views.logout_user, name='logout'),
    path('account/register/', views.register, name='register'),
    path('contact/', views.contact, name='contact'),
    path('products/product/<int:pk>', views.product, name='product'),
    path('category/<str:cat>', views.category, name='category'),
]