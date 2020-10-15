# Energiser Score Tracker

We will be building our first full stack app. It will be a chance to embed everything we've learnt so far and practice breaking down problems into solvable chunks.

## Requirements

- Must use a Database for persistent storage
- Must use the model pattern to allow easy interaction with the data
- Must use an REST API server to manage requests and serve back data
- Must have a front end which allows users to at least view the data

The rest is up to you!


# Planning

0. count and store everyday's squat numbers for each other

1. What we have to consider....
Front-end / Back-end
input data to database / request and show data on front-end

2. Front-end
    - Input data
        - input 'name', 'date', 'numbers', 'submit button'
        -   
    - Output data
        - request data by 'name': it will show whole data of the user in table
            (- we can also show the graph later)
        - request data by 'date': it will show of every users on that day in table

3. Back-end
    - make a database and connect it to server
        //- setup heroku
        //- npm init
        //- npx express-generator --no-view
        //- npm install dotenv, pg......
    //- server
    - create a table which contains id, name, date, score, (total score(Bonus)) = create table
        - dafault data for example.. 
    - * get the input from frontend and put them into the table = populate table
    - setup express  
    - request handlelist 
        - app.get
        - app.post
        - * app.put (for accumulated score, extra.. )
        - * delete data 

4. connect Front-end and Back-end
    - check postman


5. MVP (our minimum viable product)
    - show the data in the table on front-end
    - post default data into table on database and request them (get)
    - print out the data on index.html file  


# Work order

1. front end / make index.html file in simple layout
    - input boxes and submit button
        - use dropdown list for name of member
        - input type ="date" ?? (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)
                <label for="start">Start date:</label>

                <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
        - score.. just number 

    - result area to show table (if.. name, date, null....)
        - user name by dropdown : returns two rows of table 
                name   |1 oct|2 oct|3 oct|
                number | 30  | 25  | 26  |
        - * date : returns two rows of table
                1 oct  |hajoo |mahdi |ewan |
                number | 30   | 25   | 26  |
        - * take both name and date : returns one number
    
    - layout on the drawing!

2. read the code of Mondat recap, the cat thing.. 

3. back end / 
    - create table (https://www.postgresqltutorial.com/postgresql-date/)
    - function (input)
        - get input data
            - getNumeber() 
        - store them into table 
            - 
            -
            -

    - function (output) show the data to front page...
        - 

4. 


Front end
Count++
CSS/HTML lay out
JS functionality eg
including buttons and input section for count
Users??
Game type: 
Daily squat count?
Per user?
User/value/date
Back end
Express
Model
Table creation
Table populating


