# Generated by Django 4.2 on 2023-05-04 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstApp', '0016_alter_blogimage_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blog',
            options={'ordering': ['-pinned_order', '-created']},
        ),
        migrations.AddField(
            model_name='blog',
            name='pinned_order',
            field=models.IntegerField(default=0),
        ),
    ]
