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

## Running Website On Vocareum

1. First make sure that you have installed `pipenv` package.
```shell
python3.8 -m pip install pipenv
```

2. `2D_Project` will be the **root** folder of our application. 
- From the root folder, install the packages specified in the `Pipfile`.
```shell
python3.8 -m pipenv install
```

3. To activate the virtualenv, run
```shell
python3.8 -m pipenv shell
```

4. Ensure the following on `__init__.py`
```python
application.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=True)
```

5. First Time running flask (Only needs to be done once)
```shell
chmod a+x ./runflaskvoc.sh
```

6. For subsequent times that we want to run the flask server.
```shell
./runflaskvoc.sh
```

6.  Once it is running, you can open another tab in your browser and type the following url: [https://myserver.vocareum.com/](https://myserver.vocareum.com/)

## Running website on local computer

1. First make sure that you have installed `pipenv` package.
```shell
pip install --user pipenv
```

2. `2D_Project` will be the **root** folder of our application. 
- From the root folder, install the packages specified in the `Pipfile`.
```shell
pipenv install
```

3. To activate the virtualenv, run
```shell
pipenv shell
```


4. Ensure the following on `__init__.py`
```python
application.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=False)
```

5. Run the flask server on local computer
```shell
flask run
```

6. Enter the website shown in the terminal hosted on local computer to see the website.