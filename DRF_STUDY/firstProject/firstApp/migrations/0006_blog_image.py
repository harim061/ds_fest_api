# Generated by Django 4.2 on 2023-05-04 01:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstApp', '0005_delete_postimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='image',
            field=models.ImageField(null=True, upload_to='blog_images'),
        ),
    ]
