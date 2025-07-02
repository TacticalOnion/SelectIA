from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)

class Team(models.Model):
    name = models.CharField(max_length=50)

class Person(models.Model):
    name = models.CharField(max_length=150)
    photo = models.CharField(max_length=500, blank=True, null=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')

class Event(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=255)
    startDate = models.DateField()
    endDate = models.DateField()
    venue = models.CharField(max_length=200)
    location = models.CharField(max_length=500)

class Content(models.Model):
    content = models.CharField(max_length=100)
    aspect = models.CharField(max_length=50)
    date = models.DateField()
    description = models.CharField(max_length=500)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='contents')

class Post(models.Model):
    title = models.CharField(max_length=300)
    description = models.CharField(max_length=500)
    date = models.DateField()
    prompt = models.CharField(max_length=500)

class Emotion(models.Model):
    name = models.CharField(max_length=50)

class ProjectXPerson(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('project', 'person')

class PersonXContent(models.Model):
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    emotion = models.ForeignKey(Emotion, on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        unique_together = ('content', 'person')

class ContentXPost(models.Model):
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('content', 'post')
