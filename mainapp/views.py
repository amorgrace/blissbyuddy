from django.shortcuts import render, redirect
from .models import Product, Category
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django import forms


def index(request):
    products = Product.objects.all()
    return render(request, 'mainapp/index.html', {'products':products})
 

def products(request):
    return render(request, 'mainapp/products.html')

def product(request,pk):
    product = Product.objects.get(id=pk)
    return render(request, 'mainapp/product.html', {'product':product})

def wishlist(request):
    return render(request, 'mainapp/wishlist.html')

def login_user(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, username=email, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, "Login Successful!")
            return redirect('index')
        
        else:
            messages.success(request, ('Login credentials invalid'))
            return redirect('login')

    else:
        return render(request, 'mainapp/login.html')

def logout_user(request):
    logout(request)
    messages.success(request, ("Thanks for stopping by!"))
    return redirect('index')

def register(request):

    if request.method == "POST":
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']


        if password1 == password2:
            if User.objects.filter(email=email).exists():
                messages.error(request, "Email already exists")
                return redirect('register')

            else:
                user = User.objects.create_user(
                    username=email,
                    first_name=firstname,
                    last_name=lastname,
                    email=email,
                    password=password1
                )
                user.save()
                messages.success(request, 'Registration complete!')
                return redirect('login')
        else:
            messages.error(request, 'Passwords do not match, try again!')
            return redirect('register')
    else:
        return render(request, 'mainapp/register.html')


# def register(request):
#     form = SignUpForm
#     if request.method == "POST":
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             form.save()
#             # to login user
#             email = form.cleaned_data['username']
#             password = form.cleaned_data['password1']
#             user = authenticate(email=email, password=password)
#             login(request, user)
#             messages.success(request, "Registration Succesfful! Welcome Abord!")
#             return redirect('index')
#         else:
#             messages.success(request, 'Registration went wrong, Try again')
#             return redirect('register')
#     else:      
#         return render(request, 'mainapp/register.html')

def contact(request):
    return render(request, 'mainapp/contact.html')

def category(request, cat):
    try:
        category = Category.objects.get(name=cat)
        products = Product.objects.filter(category=category)
        return render(request, 'mainapp/category.html', {'products': products, 'category': category})
    except:
        messages.success(request, ("That Category Doesn't Exist..."))
        return redirect('index')
