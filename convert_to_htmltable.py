# -*- coding: utf-8 -*-
"""
Created on Tue May 21 08:59:17 2019

@author: a_vis
"""

import json
import json2table

path_file = "C:/Users/a_vis/Documents/Data Science/Training/Oxford Brookes - Distributed Systems/Working/"

# data_courseDesc = json.loads(path_file + "course_description.json")

with open(path_file + "course_description.json") as json_file:  
    data = json.load(json_file)
    
build_direction = "LEFT_TO_RIGHT"
table_attributes = {"style": "width:100%"}
print(json2table.convert(data, 
                         build_direction=build_direction, 
                         table_attributes=table_attributes))