from .models import Project, Team, Person, Event, Content, Post, Emotion, ProjectXPerson, PersonXContent, ContentXPost
from django.contrib import admin

admin.site.register(Project)
admin.site.register(Team)
admin.site.register(Person)
admin.site.register(Event)
admin.site.register(Content)
admin.site.register(Post)
admin.site.register(Emotion)
admin.site.register(ProjectXPerson)
admin.site.register(PersonXContent)
admin.site.register(ContentXPost)
