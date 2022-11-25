# 2D project
**Table of Contents**

- [2D project: Food Safety and Food Security](#2d-project)
    - [Python Report Notebook](#running-python-report-notebook)
        - [Modules required for Python Notebook](#modules-required-for-python-report-notebook)
    - [Running of Website](#running-website)


## Running Python Report Notebook

### Modules required for Python Report Notebook
1. seaborn 
2. matplotlib
3. numpy 
4. pandas

## Running Website

### Install required libraries to run Website


First make sure that you have installed `pipenv` package.

```shell
pip install --user pipenv
```

`2D_Project` will be the **root** folder of our application. 

From the root folder, install the packages specified in the `Pipfile`.
```shell
pipenv install
```

To activate the virtualenv, run
```shell
pipenv shell
```
Finally run flask
```shell
flask run
```
