import React from 'react';
import { Box,  useTheme } from "@mui/material";
import { tokens } from "../theme";
import { NavigationBreadcrumbs } from './NavigationBreadcrumbs';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import '../styles/shop.css'
function CategoryFilter ({ onFilterChange,selectedCheckboxes, onCheckboxChange })  {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  
  return (
    <section className="filters" backgroundColor={colors.primary[100]}aria-labelledby="filters-header">
      <div>
          <NavigationBreadcrumbs/>
        </div>
        <Typography variant="h6" component="header" id="filters-header">
    Filters
  </Typography>
      <ul>
        {/* Exercise */}
        <li>
          <label>
          <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Exercise & Fitness"
                    checked={selectedCheckboxes.includes('Exercise & Fitness')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Exercise & Fitness</Typography>
                </Box>

          </label>
        </li>

        {/* Team Sports */}
        <li>
        <label>
        <Box display="flex" alignItems="center">
        <Checkbox
          onChange={onCheckboxChange}
          value="Team Sports"
          checked={selectedCheckboxes.includes('Team Sports')}
          color="primary"
          sx={{ marginRight: '5px'}}
        />
          <Typography variant="body1" color="#fff">Team Sports</Typography>
          </Box>
        </label>
          <ul>
            <li>
              <label>
                <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Football"
                    checked={selectedCheckboxes.includes('Football')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Football</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
                <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Basketball"
                    checked={selectedCheckboxes.includes('Basketball')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Basketball</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
                <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Volleyball"
                    checked={selectedCheckboxes.includes('Volleyball')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Volleyball</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Cricket"
                    checked={selectedCheckboxes.includes('Cricket')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Cricket</Typography>
                </Box>
              </label>
            </li>
          </ul>
        </li>

        {/* Racquet Sports */}
        <li>
          <label>
            <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Racket"
                    checked={selectedCheckboxes.includes('Racket')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Racket Sports</Typography>
                </Box>
          </label>
          <ul>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Badminton"
                    checked={selectedCheckboxes.includes('Badminton')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Badminton</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Tennis"
                    checked={selectedCheckboxes.includes('Tennis')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Tennis</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Table Tennis"
                    checked={selectedCheckboxes.includes('Table Tennis')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Table Tennis</Typography>
                </Box>

              </label>
            </li>
          </ul>
        </li>

        {/* Water Sports */}
        <li>
          <label>
          <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Water"
                    checked={selectedCheckboxes.includes('Water')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Water Sports</Typography>
                </Box>
          </label>
        </li>

        {/* Skating */}
        <li>
          <label>
          <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Skating"
                    checked={selectedCheckboxes.includes('Skating')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Skating</Typography>
                </Box>
          </label>
          <ul>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Roller"
                    checked={selectedCheckboxes.includes('Roller')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Roller Skating</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Inline"
                    checked={selectedCheckboxes.includes('Inline')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Inline Skating</Typography>
                </Box>
              </label>
            </li>
          </ul>
        </li>

        {/* Combat */}
        <li>
          <label>
          <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Combat"
                    checked={selectedCheckboxes.includes('Combat')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Combat</Typography>
                </Box>
          </label>
        </li>

        {/* Games */}
        <li>
          <label>
          <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Games"
                    checked={selectedCheckboxes.includes('Games')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Games</Typography>
                </Box>
          </label>
          <ul>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Billiards"
                    checked={selectedCheckboxes.includes('Billiards')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Billiards</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Carrom"
                    checked={selectedCheckboxes.includes('Carrom')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Carrom</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Darts"
                    checked={selectedCheckboxes.includes('Darts')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Darts</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Cards"
                    checked={selectedCheckboxes.includes('Cards')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Cards</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Others"
                    checked={selectedCheckboxes.includes('Others')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Others</Typography>
                </Box>
              </label>
            </li>
          </ul>
        </li>

        {/* Active Wear */}
        <li>
          <label>
          <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Apparels"
                    checked={selectedCheckboxes.includes('Apparels')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Apparels</Typography>
                </Box>
          </label>
          <ul>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Clothing"
                    checked={selectedCheckboxes.includes('Clothing')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Clothing</Typography>
                </Box>
              </label>
            </li>
            <li>
              <label>
              <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Footwear"
                    checked={selectedCheckboxes.includes('Footwear')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Footwear</Typography>
                </Box>
              </label>
            </li>
          </ul>
        </li>

        {/* Trophies */}
        <li>
          <label>
          <Box display="flex" alignItems="center">
                  <Checkbox
                    onChange={onCheckboxChange}
                    value="Trophies"
                    checked={selectedCheckboxes.includes('Trophies')}
                    sx={{ marginRight: '5px' }}
                  />
                  <Typography variant="body1" color="#fff">Trophies</Typography>
                </Box>
          </label>
        </li>
      </ul>
    </section>
  );
};

export default CategoryFilter;
