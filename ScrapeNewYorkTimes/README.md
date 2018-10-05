# Scrapping-NewYorkTimes
https://developer.nytimes.com/

Source: http://dlab.berkeley.edu/blog/scraping-new-york-times-articles-python-tutorial

SCRAPING NEW YORK TIMES ARTICLES WITH PYTHON: A TUTORIAL
Posted: Feb, 03, 2015

By: Rochelle

Keyword: Python, Text Analysis, Web

This tutorial demonstrates how to use the New York Times Articles Search API using Python. From the API's documentation:

With the Article Search API, you can search New York Times articles from Sept. 18, 1851 to today, retrieving headlines, abstracts, lead paragraphs, links to associated multimedia and other article metadata. 

The API will not return full text of articles. But it will return a number of helpful metadata such as subject terms, abstract, and date, as well as URLs, which one could conceivably use to scrape the full text of articles.

To begin, you first need to obtain an API key from the New York Times, which is fast and easy to do. See here for more information.

You also need to install the nytimesarticle package, which is a python wrapper for the New York Times Article Search API. This allows you to query the API through python. 

To get started, let's fire up our favorite Python environment (I'm a big fan of ipython notebook):

?
1
2
from nytimesarticle import articleAPI
api = articleAPI('*Your Key Here*')
Now we can use the search function with our desired search parameters/values:

?
3
4
5
articles = api.search( q = 'Obama',
     fq = {'headline':'Obama', 'source':['Reuters','AP', 'The New York Times']},
     begin_date = 20111231 )
The q (for query) parameter searches the article's body, headline and byline for a particular term. In this case, we are looking for the search term ‘Obama’. The fq (for filter query) parameter filters search results by various dimensions. For instance, ‘headline’:’Obama’ will filter search results to those with ‘Obama’ in the headline. 'source':['Reuters','The New York Times'] will filter by source (Reuters, New York Times, and AP are available through the API.) The begin_date parameter (in YYYYMMDD format) limits the date range of the search.

As you can see, we can specify multiple filters by using a python dictionary and multiple values by using a list: fq = {'headline':'Obama', 'source':['Reuters','AP', 'The New York Times']}

There are many other parameters and filters we can use to specify our serach. Get a full list here.

The search function returns a dictionary of the first 10 results. To get the next 10, we have to use the page parameter. page = 2 returns the second 10 results, page = 3 the third 10 and so on.

If you run the code, you'll see that the returned dictionary is pretty messy. What we’d really like to have is a list of dictionaries, with each dictionary representing an article and each dictionary representing a field of metadata from that article (e.g. headline, date, etc.) We can do this with a custom function:

?
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
def parse_articles(articles):
    '''
    This function takes in a response to the NYT api and parses
    the articles into a list of dictionaries
    '''
    news = []
    for i in articles['response']['docs']:
        dic = {}
        dic['id'] = i['_id']
        if i['abstract'] is not None:
            dic['abstract'] = i['abstract'].encode("utf8")
        dic['headline'] = i['headline']['main'].encode("utf8")
        dic['desk'] = i['news_desk']
        dic['date'] = i['pub_date'][0:10] # cutting time of day.
        dic['section'] = i['section_name']
        if i['snippet'] is not None:
            dic['snippet'] = i['snippet'].encode("utf8")
        dic['source'] = i['source']
        dic['type'] = i['type_of_material']
        dic['url'] = i['web_url']
        dic['word_count'] = i['word_count']
        # locations
        locations = []
        for x in range(0,len(i['keywords'])):
            if 'glocations' in i['keywords'][x]['name']:
                locations.append(i['keywords'][x]['value'])
        dic['locations'] = locations
        # subject
        subjects = []
        for x in range(0,len(i['keywords'])):
            if 'subject' in i['keywords'][x]['name']:
                subjects.append(i['keywords'][x]['value'])
        dic['subjects'] = subjects   
        news.append(dic)
    return(news) 
I’ve only included the fields that I find most relevant, but you can easily add any field that I missed.

Now that we have a function to parse results into a clean list, we can easily write another function that collects all articles for a search query in a given year. In this example, I want to find all the articles in Reuters, AP, and The New York Times with the search query ‘Amnesty International’:

?
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
def get_articles(date,query):
    '''
    This function accepts a year in string format (e.g.'1980')
    and a query (e.g.'Amnesty International') and it will 
    return a list of parsed articles (in dictionaries)
    for that year.
    '''
    all_articles = []
    for i in range(0,100): #NYT limits pager to first 100 pages. But rarely will you find over 100 pages of results anyway.
        articles = api.search(q = query,
               fq = {'source':['Reuters','AP', 'The New York Times']},
               begin_date = date + '0101',
               end_date = date + '1231',
               sort='oldest',
               page = str(i))
        articles = parse_articles(articles)
        all_articles = all_articles + articles
    return(all_articles)
This function will input a year and search query, and return a list of all articles that fit those parameters, parsing them into a nice list of dictionaries. With this, we can scale up and loop over as many years as we want:

?
59
60
61
62
63
Amnesty_all = []
for i in range(1980,2014):
    print 'Processing' + str(i) + '...'
    Amnesty_year =  get_articles(str(i),'Amnesty International')
    Amnesty_all = Amnesty_all + Amnesty_year
Now we have an object called Amnesty_all that lists a dictionary for each article, each containing fields like Headline, Date, Locations, Subjects, Abstract, Word Count, URL, etc.

Pretty neat! We can then export the dataset into a CSV (with each row as an article, and columns for metadata) and analyze it to explore interesting questions.

To export into a csv, I like to use the csv module:

?
64
65
66
67
68
69
import csv
keys = Amnesty_all[0].keys()
with open('amnesty-mentions.csv', 'wb') as output_file:
    dict_writer = csv.DictWriter(output_file, keys)
    dict_writer.writeheader()
    dict_writer.writerows(Amnesty_all)
And there you have it! You just learned how to collect years worth of articles from the New York Times, parse them, and download the resulting database as a csv.

 --------------------
