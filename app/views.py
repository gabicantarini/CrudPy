from django.shortcuts import render, redirect
from app.forms import CarsForm


# Create your views here.
def home(request):
    return render(request, 'index.html')


def form(request):
    data = {}
    data['form'] = CarsForm()
    return render(request, 'form.html', data)

def create(request):
    form = CarsForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')



