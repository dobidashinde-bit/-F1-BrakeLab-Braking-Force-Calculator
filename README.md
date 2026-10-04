# 🏎️ F1 BrakeLab — Braking Force Calculator
![F1 BrakeLab](https://github.com/dobidashinde-bit/-F1-BrakeLab-Braking-Force-Calculator/blob/8b192eeda5980ca7a3ab5c45c0cc0749d8f27606/Screenshot%202026-10-04%20174627.png)

# 🏎️ F1 BrakeLab — Braking Force Calculator

### How hard can you brake?

F1 BrakeLab is a small engineering calculator built with **HTML, CSS, and JavaScript**.

The project combines basic vehicle physics with an F1-inspired telemetry interface. Enter the car's mass, speed, and braking distance to estimate the braking force required to stop.

---

## 🏁 What Does It Calculate?

F1 BrakeLab calculates:

- 🛑 **Braking Force**
- 📉 **Deceleration**
- 🏎️ **G-Force**
- ⚡ **Kinetic Energy**
- ⏱️ **Stopping Time**

---

## 🎮 How It Works

Enter three values into the calculator:

| Input | Unit | Description |
|---|---|---|
| **Mass** | kg | Mass of the vehicle |
| **Speed** | km/h | Initial vehicle speed |
| **Braking Distance** | m | Distance required to stop |

After entering the values, press **BRAKE NOW**.

The calculator processes the inputs and displays the estimated braking telemetry.

---

## 🧮 Engineering Formula

The main braking model uses:

```text
a = v² / 2s

F = ma
```

Where:

- `a` = deceleration in m/s²
- `v` = initial velocity in m/s
- `s` = braking distance in metres
- `F` = braking force in Newtons
- `m` = vehicle mass in kilograms

The speed entered in km/h is first converted into m/s before the calculations are performed.

### Additional Calculations

**G-Force**

```text
G = a / 9.80665
```

**Kinetic Energy**

```text
KE = ½mv²
```

**Stopping Time**

```text
t = v / a
```

---

## 🔧 Features

- 🏎️ F1-inspired engineering interface
- 🛑 Vehicle braking-force calculation
- 📉 Deceleration calculation
- 💥 G-force calculation
- ⚡ Kinetic-energy calculation
- ⏱️ Stopping-time calculation
- 📊 Interactive telemetry results
- 🏁 Animated F1 car movement
- ✅ Input validation
- 📱 Responsive layout
- ⚙️ Engineering-focused visual design

---

## 🎨 Design

The interface is designed around the visual language of an F1 engineering dashboard.

It uses:

- Bold typography
- Black and yellow engineering-style panels
- Red F1-inspired accents
- Telemetry cards
- Track and car animation
- High-contrast information displays

The goal was to make the calculator feel more like an **engineering instrument** than a normal website.

---

## 🛠️ Built With

- **HTML** — Structure and interface
- **CSS** — Layout, styling, and animation
- **JavaScript** — Calculations and interaction
- **VS Code** — Development environment

---

## 📂 Project Structure

```text
F1-BrakeLab/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshot.png
```

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone YOUR-REPOSITORY-URL
```

### 2. Open the Project

Open the project folder in **VS Code**.

### 3. Run the Website

Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code.

---

## 🎯 Why I Built It

I built **F1 BrakeLab** to combine **web development and engineering physics** into one interactive project.

Instead of creating a basic calculator, I wanted to create a small F1-inspired telemetry tool where users can enter physical parameters and immediately see the calculated results.

The project also helped me understand how mathematical formulas can be converted into working JavaScript logic and presented through an interactive interface.

---

## 📚 What I Learned

While building F1 BrakeLab, I worked with:

- HTML page structure
- CSS Grid and Flexbox
- CSS animations and transitions
- JavaScript DOM manipulation
- JavaScript event handling
- Mathematical calculations in JavaScript
- Unit conversion
- Input validation
- Dynamic result updates
- Basic vehicle braking physics
- Git and GitHub project management

---

## ⚠️ Engineering Note

F1 BrakeLab uses a **simplified constant-deceleration model**.

Real F1 braking is significantly more complex and depends on factors such as:

- Tyre grip
- Aerodynamic downforce
- Brake temperature
- Brake bias
- Track conditions
- Vehicle speed
- Changing deceleration
- Tyre condition

Therefore, the results from this calculator are intended for **educational purposes** and should not be considered an accurate simulation of an actual Formula 1 car.

---

# 🏁 Final Lap

<p align="center">
  <img
    src="images/f1-braking.gif"
    width="850"
    alt="F1 BrakeLab braking animation"
  >
</p>

<p align="center">
  <b>🏎️ FULL THROTTLE → BRAKE POINT → MAXIMUM BRAKING 🛑</b>
</p>

<p align="center">
  <code>F = ma</code>
  &nbsp; • &nbsp;
  <code>G-FORCE</code>
  &nbsp; • &nbsp;
  <code>BRAKING FORCE</code>
</p>

<p align="center">
  <b>🏎️ F1 BRAKELAB</b>
  <br>
  <i>How hard can you brake?</i>
</p>

<p align="center">
  <sub>
    Built with HTML, CSS & JavaScript
    <br>
    Built for people who brake too late. 💀
  </sub>
</p>

---

<p align="center">
  🏁 <b>Brake late. Calculate faster. Build smarter.</b> 🏁
</p>
  🏁 <b>Brake late. Calculate faster. Build smarter.</b> 🏁
</p>
```
