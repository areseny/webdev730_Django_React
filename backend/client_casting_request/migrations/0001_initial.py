# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-07-17 19:28
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientCastingRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('casting_request_name', models.CharField(default='', max_length=100)),
                ('ship_name', models.CharField(default='', max_length=100)),
                ('employment_start_date', models.DateField()),
                ('employment_end_date', models.DateField()),
                ('talent_join_date', models.DateField()),
                ('rehearsal_start_date', models.DateField()),
                ('rehearsal_end_date', models.DateField()),
                ('performance_start_date', models.DateField()),
                ('performance_end_date', models.DateField()),
                ('visa_requirements', models.TextField(default='')),
                ('comments', models.TextField(default='')),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('accepted', 'Accepted'), ('reviewing', 'Reviewing'), ('declined', 'Declined')], default='Draft', max_length=10)),
                ('saved', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'client_casting_request',
                'ordering': ('id',),
                'managed': True,
            },
        ),
    ]
