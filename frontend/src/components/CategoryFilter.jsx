import React from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { NavigationBreadcrumbs } from './NavigationBreadcrumbs';
import { useRef,useState,useEffect } from "react";
function CategoryFilter ({ onFilterChange,selectedCheckboxes, onCheckboxChange })  {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  
  return (
    <section className="filters" backgroundColor={colors.primary[100]}aria-labelledby="filters-header">
      <div>
          <NavigationBreadcrumbs/>
        </div>
      <header id="filters-header">Filters</header>

      <ul>
        {/* Exercise */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Exercise & Fitness"
              checked={selectedCheckboxes.includes('Exercise & Fitness')}
            />
            Exercise & Fitness
          </label>
        </li>

        {/* Team Sports */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Team Sports"
              checked={selectedCheckboxes.includes('Team Sports')}
            />
            Team Sports
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Football"
                  checked={selectedCheckboxes.includes('Football')}
                />
                Football
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Basketball"
                  checked={selectedCheckboxes.includes('Basketball')}
                />
                Basketball
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Volleyball"
                  checked={selectedCheckboxes.includes('Volleyball')}
                />
                Volleyball
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Cricket"
                  checked={selectedCheckboxes.includes('Cricket')}
                />
                Cricket
              </label>
            </li>
          </ul>
        </li>

        {/* Racquet Sports */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Racket"
              checked={selectedCheckboxes.includes('Racket')}
            />
            Racket Sports
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Badminton"
                  checked={selectedCheckboxes.includes('Badminton')}
                />
                Badminton
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Tennis"
                  checked={selectedCheckboxes.includes('Tennis')}
                />
                Tennis
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Table Tennis"
                  checked={selectedCheckboxes.includes('Table Tennis')}
                />
                Table Tennis
              </label>
            </li>
          </ul>
        </li>

        {/* Water Sports */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Water"
              checked={selectedCheckboxes.includes('Water')}
            />
            Water Sports
          </label>
        </li>

        {/* Skating */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Skating"
              checked={selectedCheckboxes.includes('Skating')}
            />
            Skating
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Roller"
                  checked={selectedCheckboxes.includes('Roller')}
                />
                Roller Skating
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Inline"
                  checked={selectedCheckboxes.includes('Inline')}
                />
                Inline Skating
              </label>
            </li>
          </ul>
        </li>

        {/* Combat */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Combat"
              checked={selectedCheckboxes.includes('Combat')}
            />
            Combat
          </label>
        </li>

        {/* Games */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Games"
              checked={selectedCheckboxes.includes('Games')}
            />
            Games
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Billiards"
                  checked={selectedCheckboxes.includes('Billiards')}
                />
                Billiards
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Carrom"
                  checked={selectedCheckboxes.includes('Carrom')}
                />
                Carrom
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Darts"
                  checked={selectedCheckboxes.includes('Darts')}
                />
                Darts
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Cards"
                  checked={selectedCheckboxes.includes('Cards')}
                />
                Cards
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Others"
                  checked={selectedCheckboxes.includes('Others')}
                />
                Others
              </label>
            </li>
          </ul>
        </li>

        {/* Active Wear */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Apparels"
              checked={selectedCheckboxes.includes('Apparels')}
            />
            Apparels
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Clothing"
                  checked={selectedCheckboxes.includes('Clothing')}
                />
                Clothing
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="Footwear"
                  checked={selectedCheckboxes.includes('Footwear')}
                />
                Footwear
              </label>
            </li>
          </ul>
        </li>

        {/* Trophies */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="Trophies"
              checked={selectedCheckboxes.includes('Trophies')}
            />
            Trophies
          </label>
        </li>
      </ul>
    </section>
  );
};

export default CategoryFilter;
