<div align="center">

# PIENSA

### A virtual-classroom platform for hybrid higher education

[![Live](https://img.shields.io/badge/live-piensa.sofiabracho.com-22d3ee?style=flat-square)](https://piensa.sofiabracho.com)
![PHP](https://img.shields.io/badge/PHP-777bb4?style=flat-square&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479a1?style=flat-square&logo=mysql&logoColor=white)
![HTML/CSS](https://img.shields.io/badge/HTML%2FCSS-e34f26?style=flat-square&logo=html5&logoColor=white)

<!-- TODO: add a real screenshot, e.g. docs/cover.png (the multi-device platform shot) -->

</div>

## What it is

PIENSA is a virtual-classroom platform built for the **Territorial Polytechnic University of
Maracaibo (UPTMA)** to run hybrid education. It gives each role its own workspace and covers the
full teaching loop: planning a class, delivering activities, grading them, and keeping academic
records, plus the operational pieces a real institution needs (schedules, shared documents,
academic periods, automated backups).

This was my **final degree project** (B.Eng. Informatics, UPTMA).

> Portfolio project by [Sofia Bracho](https://sofiabracho.com).

## Features

- **Four roles**, each with a tailored workspace and permissions.
- **Activity grading** — assign, submit, and grade coursework.
- **Class planning** and **schedules** for teachers and students.
- **Shared documents** per class.
- **Academic periods** to organize terms and enrollment.
- **Automated backups** of the platform data.

<!-- TODO: confirm the exact four roles (e.g. admin, control/coordinator, teacher, student) and refine the list. -->

## Stack

- **PHP** — server-side application and business logic
- **MySQL** — relational data (users, classes, activities, grades, periods)
- **JavaScript** — client-side interactivity
- **HTML / CSS** — views and styling

## Run

```bash
# Requirements: PHP, MySQL, a web server (Apache/Nginx) or `php -S` for local dev

# 1. Create the database and import the schema
mysql -u root -p < db/schema.sql        # TODO: confirm path to the SQL dump

# 2. Configure the DB connection
cp config.example.php config.php         # TODO: confirm config file + keys
#    set host, database, user, password

# 3. Serve
php -S localhost:8000 -t public          # TODO: confirm document root
```

## Project structure

<!-- TODO: drop in the real tree (e.g. public/, src/ or includes/, db/, assets/) -->

## Context

- Institution: Universidad Politécnica Territorial de Maracaibo (UPTMA)
- Purpose: hybrid (in-person + online) teaching
- Origin: final degree project, B.Eng. Informatics

---

_Draft README generated for the PIENSA repo. Fill the `TODO` markers (screenshot, exact run/setup
commands, role names, file tree) with the real repo details before publishing._
