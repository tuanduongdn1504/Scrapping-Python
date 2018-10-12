# -*- coding: utf-8 -*-
"""
Created on Tue Oct  9 09:35:26 2018

@author: Admin
"""

import numpy as np 
import matplotlib.pyplot as plt


X = np.array([[1,2,3,4,5]]).T

y = np.array([[ 6,7,4,3,2]]).T
# Visualize data 
# Building Xbar 
one = np.ones((X.shape[0], 1))
Xbar = np.concatenate((one, X), axis = 1)

# Calculating
A = np.dot(Xbar.T, Xbar)
b = np.dot(Xbar.T, y)
w = np.dot(np.linalg.pinv(A), b)
print('w = ', w)
