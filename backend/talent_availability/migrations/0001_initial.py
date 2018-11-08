# Generated by Django 2.0.5 on 2018-10-15 21:26

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('talent', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TalentAvailability',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField(default=datetime.date.today)),
                ('end_date', models.DateField(default=datetime.date.today)),
                ('talent', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='talent_availabilities', to='talent.Talent')),
            ],
            options={
                'db_table': 'talent_availability',
                'ordering': ('talent', 'start_date', 'end_date'),
                'managed': True,
            },
        ),
        migrations.AlterUniqueTogether(
            name='talentavailability',
            unique_together={('talent', 'start_date', 'end_date')},
        ),
    ]
