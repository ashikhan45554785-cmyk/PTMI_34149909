# PTMI - Patient Treatment Management Interface (Assessment 1)

React + Vite front-end. All data is stored locally (no backend).

## Run
1. Install Node.js (v18+)
2. Open this folder in Visual Studio Code
3. In the terminal run:
   npm install
   npm run dev
4. Open the URL shown (usually http://localhost:5173)

## Structure
- src/data/treatments.js            predefined treatment records (JSON array)
- src/App.jsx                       main component, filter state
- src/components/FilterControl.jsx  filter dropdown
- src/components/TreatmentList.jsx  renders list with .map()
- src/components/TreatmentCard.jsx  single treatment (props)
- src/components/TreatmentForm.jsx  entry form (useState, onChange, onClick)
- src/styles.css                    mobile-first responsive styles
