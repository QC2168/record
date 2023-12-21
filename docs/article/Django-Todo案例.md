---
title: Django-Todo案例
tags: [python]
---

## Django是什么

`Django`是一个采用MTV的框架模式的web应用框架， 最初被设计用于具有快速开发需求的新闻类站点，目的是要实现简单快捷的网站开发。

## 初体验Django

今天的主题是使用`Django`制作一个`TodoList`的案例，可以说是来初入门`Django`这一门框架的开始。在啃这一篇文章之前，你需要具备`Python`的基础语法，否则啃起来可能有点压力。

![image-20220417204347333](https://raw.githubusercontent.com/QC2168/note-img/main/202204172043384.png)

## 创建一个新的项目

在终端中敲一下命令，在当前目录下创建一个`django`项目，这里面包含项目实例需要的设置项集合，包括数据库配置、`Django` 配置和应用程序配置。

```
django-admin startproject mysite
```

## 启动项目

将当前目录切换至`mysite`下，敲一下命令，会在本地的`8000`端口开启一个站点服务。

```
python manage.py runserver
```

## 创建TodoList应用

这里的应用可以理解功能划分，而上面创建的项目是多个功能的网站。

```
python manage.py startapp todolist
```

将应用引用在项目中，在`mysite/settings.py`中的`INSTALLED_APPS`属性下，添加`todolist.apps.TodolistConfig`，告知`django`当前项目中新增`todolist`应用。

```python
# Application definition

INSTALLED_APPS = [
    'todolist.apps.TodolistConfig',
    // ... other code
]
```

## 创建数据库

默认情况下，`django`使用项目下的`db.sqlite3`作为默认数据库，由于我们只是创建一个简单的项目，直接选择它是最好的方法。

> 如果你想使用其他数据库，你需要安装对应数据库的驱动，并在项目配置文件中的DATABASES中修改它

打开`todolist`中的`models`文件，我们的应用需要一个`TodoList`模型，存放事件标题、创建以及更新时间。

> 每个class代表一个模型，而下面的类变量则是模型的每个字段

```python
// todolist/models.py
from django.db import models

# Create your models here.
class TodoList(models.Model):
    def __str__(self) -> str:
        return self.title
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

在定义好模型之后，我们需要告知`django`为我们创建对应的表。

```bash
// 检测模型变化，将修改部分储存起来
python manage.py makemigrations todolist
// 自动执行数据库迁移，同步数据库结构
python manage.py migrate
```

在执行以上命令之后，可以看到`django`已经自动的在`db.sqlite3`文件中创建了对应的表

![image-20220417212404879](https://raw.githubusercontent.com/QC2168/note-img/main/202204172124977.png)

## 创建路由

在`todolist`文件夹下创建`urls.py`文件，当我们在请求这个项目中的某个地址时，`django`会遍历每一个路由的地址，直到与当前请求的`url`匹配上为止。（如果没有匹配上会抛出异常）

```python
// todolist/urls.py
from django.urls import path
from . import views
app_name = "todolist"
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('add', views.add, name='add'),
    path('delete', views.delete, name='delete')
]
```

我们为`todolist`应用创建了三条路由地址，分别是`/`、`add`、`delete`，对应的是列表页面（主页）、添加数据、删除数据。

注意。这里我们引用了`views.py`下的方法，由于现在还没有在views.py文件中配置相对应的方法，现在页面是无法正常显示的。

在项目中引用应用中的路由信息，其实我们也可以将路径直接写在该文件下的，但随着你的应用越来越多时该文件会越来越大，而且不好管理。

```python
// mysite/urls.py
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('todo/', include('todolist.urls'))
]
```

## 创建视图&模板

视图即是我们看到是页面内容，创建一个`index.html`文件夹在`todolist/template/todolist/index.html`

> 默认情况下，`django`会在应用中的`template`/应用中查找对应的`html`文件，
>
> 其实，我们也可以将`index.html`文件直接放到`template`中，但是会有个问题，假设有另外一个应用的模板文件与`index.html`冲突了呢？那么`django`将无法去区分它们。

```html
// 这里只展示主要的代码块，避免代码块过长
// todolist/template/todolist/index.html
<body>
  <div class="flex justify-center mt-20">
    <form action="/todo/add" method="post">
      {% csrf_token %}
      <div class="mb-3 xl:w-96 flex">
        <input type="text" class="
                form-control
                block
                w-full
                px-2
                py-1
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                mr-2
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              " id="exampleFormControlInput4" placeholder="" name="title" /><button type="submit"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">add</button>
      </div>
    </form>
  </div>

  <div class="flex justify-center">
    {% if error_message %}
    <div>
      <a href="#!"
        class="text-red-600 hover:text-red-700 transition duration-300 ease-in-out mb-4">{{error_message}}</a>
    </div>
    {% endif %}
    <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
      {% for item in list %}
      <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg relative"><span>{{ item.title }}</span>
        <form action="/todo/delete" method="post">
          {% csrf_token %}
          <button type="submit" name='id' value={{item.id}}
          class="px-6 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out absolute inset-y-2 right-2">remove</button>
        </form>
      </li>
      {% empty %}
      <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg relative"><span>添加一条新待办吧！</span>
      {% endfor %}
    </ul>
  </div>
  <ul>
  </ul>
  </div>

// 引入tailwindcss
<script src="https://cdn.tailwindcss.com"></script>

// 这里只展示主要的代码块，避免代码块过长
```

以上的代码是`index.html`中的展示数据的部分代码，这里使用了模板语法遍历了`list`，它是我们上面创建的`TodoList`模型的数据。

接下来，我们要在`views.py`，编写我们在上面`urls.py`中路由指向的三个方法（`add`、`delete`、`IndexView`）。

在`IndexView`视图中我们继承了通用视图`ListView`，抽象显示一个对象列表，我们需要为通用视图它的模型（`model`属性），默认情况下`ListView`视图会自动指定`<app name>/<model name>_list.html` 的默认模板，这里我们使用`template_name`，让它指向我们创建的`index.html`模板。

使用`context_object_name`属性，指定在模板中的变量名称，也即是上面模板中提到的`list`变量。

定义`get_queryset`方法，获取视图的项目列表（必须是一个可迭代的对象）

```python
// todolist/views.py
from .models import TodoList
from django.views import generic
class IndexView(generic.ListView):
    template_name = 'todolist/index.html'
    context_object_name = 'list'
    def get_queryset(self):
        return TodoList.objects.all()
```

下面这两个方法是分别是对数据库的数据进行增、删的操作。

`request`对象是当前用户请求的信息集合，我们从中取得当前请求的方式进行判断如果非POST则不处理。接下来在从`POST`请求中获取`title`属性，通过`TodoList`模型把数据提交到数据库中。（`delete`也是类似的操作）

```python
// todolist/views.py
from django.http import HttpResponseRedirect
from django.urls import reverse
def add(request):
    if(request.method=='POST'):
        val=request.POST.get('title')
        if(not val):
            return HttpResponseRedirect( reverse('todolist:index'), {
            'error_message': "标题不能为空.",
        })
        p=TodoList.objects.create(title=val)
        p.save()

    return HttpResponseRedirect(reverse('todolist:index'))

```

```python
// todolist/views.py
def delete(request):
    if(request.method=='POST'):
        id=request.POST.get('id')
        if(id is None):
            return HttpResponseRedirect( reverse('todolist:index'), {
            'error_message': "ID有误.",
        })
        TodoList.objects.get(id=id).delete()

    return HttpResponseRedirect(reverse('todolist:index'))
```

到了这里，`todolist`应用已经达到了最初图中的效果了，可以对数据库中的数据进行增和改操作，你可以接着优化这个应用，例如双击事件时可以修改事件的内容，加入一些动画效果等。

当然，这只是简单使用`jdango`，如果你想继续学习请移步[`Django`](https://www.djangoproject.com/start/overview/)

![image-20220417204347333](https://raw.githubusercontent.com/QC2168/note-img/main/202204172043384.png)