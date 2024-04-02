// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid.
 */
function calculateAreaOfTrapezoid() {
  // input
  const baseaOfTrapezoid = parseInt(document.getElementById('base-a').value)
  const basebOfTrapezoid = parseInt(document.getElementById('base-b').value)
  const heightOfTrapezoid = parseInt(document.getElementById('height-of-trapezoid').value)


  // process
  const areaOfTrapezoid = (baseaOfTrapezoid + basebOfTrapezoid) / 2 * heightOfTrapezoid

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTrapezoid + ' mm²'
}
