import React from 'react';
import { useRef,useState,useEffect } from "react";
const CategoryFilter = ({ onFilterChange,selectedCheckboxes, onCheckboxChange }) => {
  
  
  return (
    <section className="filters" aria-labelledby="filters-header">
      <header id="filters-header">Filters</header>

      <ul>
        {/* Exercise */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="exercise"
              checked={selectedCheckboxes.includes('exercise')}
            />
            Exercise
          </label>
        </li>

        {/* Team Sports */}
        <li>
          <label>
            <input
              onChange={onCheckboxChange}
              type="checkbox"
              value="team_sports"
              checked={selectedCheckboxes.includes('team_sports')}
            />
            Team Sports
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="football"
                  checked={selectedCheckboxes.includes('football')}
                />
                Football
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="basketball"
                  checked={selectedCheckboxes.includes('basketball')}
                />
                Basketball
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="volleyball"
                  checked={selectedCheckboxes.includes('volleyball')}
                />
                Volleyball
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="cricket"
                  checked={selectedCheckboxes.includes('cricket')}
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
            Racquet Sports
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="badminton"
                  checked={selectedCheckboxes.includes('badminton')}
                />
                Badminton
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="tennis"
                  checked={selectedCheckboxes.includes('tennis')}
                />
                Tennis
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="table_tennis"
                  checked={selectedCheckboxes.includes('table_tennis')}
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
              value="water_sports"
              checked={selectedCheckboxes.includes('water_sports')}
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
              value="skating"
              checked={selectedCheckboxes.includes('skating')}
            />
            Skating
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="roller"
                  checked={selectedCheckboxes.includes('roller')}
                />
                Roller Skating
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="inline"
                  checked={selectedCheckboxes.includes('inline')}
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
              value="combat"
              checked={selectedCheckboxes.includes('combat')}
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
              value="games"
              checked={selectedCheckboxes.includes('games')}
            />
            Games
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="billiards"
                  checked={selectedCheckboxes.includes('billiards')}
                />
                Billiards
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="carrom"
                  checked={selectedCheckboxes.includes('carrom')}
                />
                Carrom
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="darts"
                  checked={selectedCheckboxes.includes('darts')}
                />
                Darts
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="cards"
                  checked={selectedCheckboxes.includes('cards')}
                />
                Cards
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="others"
                  checked={selectedCheckboxes.includes('others')}
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
              value="active_wear"
              checked={selectedCheckboxes.includes('active_wear')}
            />
            Active Wear
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="clothing"
                  checked={selectedCheckboxes.includes('clothing')}
                />
                Clothing
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onCheckboxChange}
                  type="checkbox"
                  value="footwear"
                  checked={selectedCheckboxes.includes('footwear')}
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
              value="trophies"
              checked={selectedCheckboxes.includes('trophies')}
            />
            Trophies
          </label>
        </li>
      </ul>
    </section>
  );
};

export default CategoryFilter;
