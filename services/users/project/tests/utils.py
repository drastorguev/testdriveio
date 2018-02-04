# users/project/tests/utils.py

from project import db
from project.api.models import User
from sqlalchemy import exc

def add_user(username, email, password):
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    return user

def is_admin(user_id):
    user = User.query.filter_by(id=user_id).first()
    return user.admin
