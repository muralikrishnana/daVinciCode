import pickle
import string
import random
import csv

def pswd(length = 8, chars = string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(length))

pretext = "DVC"
users = [["Sl No.", "Team ID", "Password"]]

prefix = int(input("Enter the number of id's required: "))

for i in range (1, prefix + 1):
    pstring = '0' * (3 - len(str(i)))

    user = []

    user.append(i)
    user.append(pretext+pstring+str(i))
    user.append(pswd())

    users.append(user)

with open("credentials/users.csv", 'w') as usersCSV:
    writer = csv.writer(usersCSV)
    writer.writerows(users)

usersCSV.close()