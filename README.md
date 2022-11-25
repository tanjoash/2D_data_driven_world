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

1. First make sure that you have installed `pipenv` package.
```shell
pip install --user pipenv
```

2. `2D_Project` will be the **root** folder of our application. 
- From the root folder, install the packages specified in the `Pipfile`.
```shell
pipenv install
```

To activate the virtualenv, run
```shell
pipenv shell
```

3. Ensure the following on `__init__.py`
```python
# set voc=False if you run on local computer
application.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=True)
```

3. First Time running flask (Only needs to be done once)
```shell
chmod a+x ./runflaskvoc.sh
```

4. For subsequent times that we want to run the flask server.
```shell
./runflaskvoc.sh
```

5.  Once it is running, you can open another tab in your browser and type the following url: [https://myserver.vocareum.com/](https://myserver.vocareum.com/)
