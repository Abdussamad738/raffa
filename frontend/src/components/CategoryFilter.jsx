import React from 'react';

const CategoryFilter = ({ onFilterChange }) => {
  return (
    <section className="filters" aria-labelledby="filters-header">
      <header id="filters-header">Filters</header>

      <ul>
        {/* Exercise */}
        <li>
          <label>
            <input
              onChange={onFilterChange}
              type="checkbox"
              value="exercise"
            />
            Exercise
          </label>
        </li>

        {/* Team Sports */}
        <li>
          <label>
            <input
              onChange={onFilterChange}
              type="checkbox"
              value="team_sports"
            />
            Team Sports
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="football"
                />
                Football
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="basketball"
                />
                Basketball
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="volleyball"
                />
                Volleyball
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="cricket"
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
              onChange={onFilterChange}
              type="checkbox"
              value="racquet_sports"
            />
            Racquet Sports
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="badminton"
                />
                Badminton
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="tennis"
                />
                Tennis
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="table_tennis"
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
              onChange={onFilterChange}
              type="checkbox"
              value="water_sports"
            />
            Water Sports
          </label>
        </li>

        {/* Skating */}
        <li>
          <label>
            <input
              onChange={onFilterChange}
              type="checkbox"
              value="skating"
            />
            Skating
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="roller"
                />
                Roller Skating
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="inline"
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
              onChange={onFilterChange}
              type="checkbox"
              value="combat"
            />
            Combat
          </label>
        </li>

        {/* Games */}
        <li>
          <label>
            <input
              onChange={onFilterChange}
              type="checkbox"
              value="games"
            />
            Games
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="billiards"
                />
                Billiards
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="carrom"
                />
                Carrom
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="darts"
                />
                Darts
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="cards"
                />
                Cards
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="others"
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
              onChange={onFilterChange}
              type="checkbox"
              value="active_wear"
            />
            Active Wear
          </label>
          <ul>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="clothing"
                />
                Clothing
              </label>
            </li>
            <li>
              <label>
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value="footwear"
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
              onChange={onFilterChange}
              type="checkbox"
              value="trophies"
            />
            Trophies
          </label>
        </li>
      </ul>
    </section>
  );
};

export default CategoryFilter;
