---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true

---


---

## 🏦 Credit Risk Modeling & Scorecard System

Built an end-to-end credit risk model on a dataset of **50,000 loan applicants**, merging customer, loan, and credit bureau data to predict the probability of loan default — a core problem in retail banking and lending.

🔗 [Live Demo](https://your-streamlit-link-here) &nbsp;|&nbsp; 📁 [GitHub Repo](https://github.com/shafiimran/ml_credit_risk_predictor)



### 🧹 Data Preparation
- Merged 3 data sources — customer demographics, loan details, and credit bureau data
- Imputed missing values in residence type using mode
- Removed outliers using domain business rules — processing fee capped at 3%, GST at 20%, net disbursement validated against loan amount
- Corrected data entry errors in categorical columns (e.g. `Personaal` → `Personal`)

---

### 📊 Exploratory Data Analysis
- Analyzed all features using KDE plots split by default status
- Identified loan tenure, delinquent months, total DPD, and credit utilization as the strongest default signals
- Found that loan amount and income individually showed weak signal — motivating the Loan-to-Income feature engineering

---

### ⚙️ Feature Engineering

| Feature | Formula |
|---|---|
| Loan-to-Income Ratio | `loan_amount / income` |
| Delinquency Ratio | `(delinquent_months × 100) / total_loan_months` |
| Avg DPD per Delinquency | `total_dpd / delinquent_months` |

---

### 🎯 Feature Selection
- Applied **VIF analysis** to remove multicollinear features (sanction amount, processing fee, GST, net disbursement, principal outstanding)
- Used **Information Value (IV > 0.02)** to retain only the most predictive features
- Applied one-hot encoding with `drop_first=True` before model training

---

### 🤖 Modelling — 4 Attempts

| Attempt | Model | Imbalance Handling | Tuning |
|---|---|---|---|
| 1 — Baseline | Logistic Regression, Random Forest, XGBoost | None | RandomizedSearchCV |
| 2 | Logistic Regression, XGBoost | Random Undersampling | — |
| 3 | Logistic Regression | SMOTETomek | Optuna |
| 4 | XGBoost | SMOTETomek | Optuna |

✅ **Final Model: Logistic Regression + SMOTETomek + Optuna** — selected for strong recall on defaulters (0.94) and interpretability

---

### 📋 Classification Report

| Class | Precision | Recall | F1-Score | Support |
|---|---|---|---|---|
| 0 — Non-Default | 0.99 | 0.93 | 0.96 | 11,423 |
| 1 — Default | 0.55 | 0.94 | 0.70 | 1,074 |
| **Accuracy** | | | **0.93** | **12,497** |
| Macro Avg | 0.77 | 0.94 | 0.83 | 12,497 |
| Weighted Avg | 0.96 | 0.93 | 0.94 | 12,497 |

> The model achieves a **recall of 0.94 on defaulters** — correctly flags 94% of actual defaults, which is the priority metric in credit risk. Selected over XGBoost for interpretability (coefficients as feature importance).

---

### 📈 Model Evaluation — Industry-Standard Credit Risk Metrics

| Metric | Value | Interpretation |
|---|---|---|
| AUC | **0.98** | Near-perfect discrimination between defaulters and non-defaulters |
| Gini Coefficient | **0.96** | Confirms strong rank ordering capability |
| KS Statistic | **85.98%** (Decile 8) | Top 3 deciles capture 98.6% of all defaulters |

---

### 🏅 Credit Scorecard & Deployment
- Mapped default probability to a credit score scaled between **300–900**
- Defined 4 rating bands:

| Score Range | Rating |
|---|---|
| 750 – 900 | 🟢 Excellent |
| 650 – 749 | 🟡 Good |
| 500 – 649 | 🟠 Average |
| 300 – 499 | 🔴 Poor |

- Deployed as a **Streamlit web app** — users receive Default Probability, Credit Score, and Risk Rating in real time

---

### 🛠️ Tech Stack
`Python` `Pandas` `NumPy` `Scikit-learn` `XGBoost` `Imbalanced-learn` `Optuna` `Streamlit` `Joblib`

---


## 🛡️Health Insurance Premium Predictor
**Tools:** Python · Scikit-learn · Pandas · Matplotlib · Streamit  &nbsp;|&nbsp; Mar 2025

• Worked on a 50,000-row, 14-feature health insurance dataset to predict annual premium amounts and deploy a live ML web application
• Built a complete ML pipeline covering EDA, data cleaning, feature engineering, model training, error analysis, and deployment
• conducted error analysis revealing poor performance (R² = 0.60) for applicants aged under 25. Applied model segmentation (Linear Regression for under 25, XGBoost for 25+), added ‘genetical risk’ feature boosting R² from 0.60 to 0.988, and deployed full preprocessing pipeline on Streamlit Community Cloud
• live at - [Streamlit Frontend](https://ml-health-insurance-predict.streamlit.app/){: target="_blank" rel="noopener noreferrer" }

[View Project](#){: .btn} &nbsp; [GitHub](https://github.com/shafiimran/ml_health_insurance_predictor){: .btn target="_blank" rel="noopener noreferrer" }

---

## 🐍 Medical Data Extraction
**Tools:** Python · Pytesseract · RegEx &nbsp;|&nbsp; Dec 2024

Medical institutions upload thousands of patient prescriptions manually. This project automates that process to significantly enhance worker efficiency. Built using Python & Pytesseract — takes a prescription image and extracts required fields such as patient details, prescription, etc. Automation completes tasks in **4–5 seconds** vs **2–3 minutes** manually.

[View Project](#){: .btn} &nbsp; [GitHub](https://github.com/shafiimran){: .btn target="_blank" rel="noopener noreferrer" }

---

## 🗂️ Expense Tracking System
**Tools:** Python · SQL · FastAPI · Streamlit &nbsp;|&nbsp; Nov 2024

A tracking system that helps users manage expenses and savings. Developed an analytics frontend where users can store/update expenses and generate analytics by **month** and **expense category**. Enables users to improve savings by **10–15%**.

[View Project](#){: .btn} &nbsp; [GitHub](https://github.com/shafiimran/expense_tracking_system){: .btn target="_blank" rel="noopener noreferrer" }

---

## 📈 Business Insights 360
**Tools:** Power BI · Power Query · DAX &nbsp;|&nbsp; Dec 2024

An interactive dashboard for Atliq Hardware helping stakeholders make data-driven decisions. Includes **5 different views** — Finance, Sales, Marketing, Supply Chain, Executive. Connected with company database containing **1.8M+ sales records**. Drove projected **10% revenue acceleration** and **20% reduction** in data-related expenses.

[View Project](#){: .btn}

---

## 📊 Sales & Finance Analytics
**Tools:** Excel · Power Query &nbsp;|&nbsp; Domain: Sales · Finance

Turns raw AtliQ Hardware sales data into actionable insights. Built customer and market performance reports and P&L statements by market and fiscal year using Power Query data modeling.

[View Project](#){: .btn} &nbsp; [GitHub](https://github.com/shafiimran/excel_sales_analytics){: .btn target="_blank" rel="noopener noreferrer" }

---

## 🗄️ AtliQ Hardware Ad-Hoc Analysis
**Tools:** SQL &nbsp;|&nbsp; Domain: Finance · Sales · Supply Chain

Analyzed **1.9M+ sales records** to optimize AtliQ Hardware's sales and customer relationships globally. Delivered Top 10 Customers by Market Share and Croma Total Gross Sales by Fiscal Year reports.

[View Project](#){: .btn} &nbsp; [GitHub](https://github.com/shafiimran/atliq_ad_hoc){: .btn target="_blank" rel="noopener noreferrer" }
