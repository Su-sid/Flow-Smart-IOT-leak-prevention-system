# Data Analytics Platform

This platform provides data analysis capabilities for the Flow Smart leak detection system, using Jupyter notebooks to analyze sensor data and detect anomalies.

## Prerequisites

- Python 3.11 or higher
- Jupyter Notebook/JupyterLab
- pip package manager

## Installation

1. Create and activate a virtual environment (recommended):

```sh
python -m venv venv
venv\Scripts\activate
```

2. Install required dependencies:

```sh
pip install jupyter numpy pandas Cython

```

## Running the Analysis

1. Start Jupyter Notebook:

```sh
jupyter notebook
```

2. Navigate to and open `data-analysis.ipynb`

3. Ensure `sensor_readings.json` is present in the same directory as the notebook

4. Run the notebook cells sequentially to:
   - Load sensor data
   - Process and analyze flow rate and pressure readings
   - Detect anomalies using the Page-Hinkley algorithm

## Data Analysis Features

- Real-time anomaly detection using Page-Hinkley method
- Flow rate and pressure sensor data analysis
- Time series visualization
- Change point detection

## File Structure

- `data-analysis.ipynb`: Main analysis notebook
- `sensor_readings.json`: Input sensor data
- `skmultiflow/`: Machine learning library for data streams

# Data Analytics Layer for Water Distribution Network Leak Detection

- The analytics platform serves as the core computational logic for diagnosing the presence of leaks. The analysis process can be divided into several stages, each with a specific purpose.

## a. Preprocessing

### i. Data Arrangement

- Sensor readings are organized in a structured tabular format with two main variables: Pressure (psi) and Flow (GPM).
- Data is collected at regular intervals to establish trends in pressure and flow rates.
- This data collection approach supports the development of a threshold for base case scenarios.

### ii. Establishing Base Cases

- Data collection for establishing base cases is preferably done at night when the network has the lowest user activity and noise production.
- The system aims to determine an optimal threshold for acceptable readings.
- A range of accepted values (maximum and minimum) is set to identify abnormal spikes that may indicate leaks.
- This value range accounts for the dynamic nature of readings due to changing water demand and system use.

### iii. Preprocessing

- The mean trajectory removal technique is applied to create a clean and consistent dataset.
- Mean subtraction (zero-centering) is used to center the data distribution around zero.
- Benefits of mean centering include normalization, bias removal, algorithm stability, and interpretability.
- Steps for using the mean trajectory removal technique:
  1. Calculate the mean for each feature or dimension.
  2. Subtract the mean value from all data points in that feature's dimension.

## b. Data Processing

- This stage forms the core of the analytics platform, where preprocessed data undergoes statistical analyses to derive relevant features and insights.
- A sensor clustering technique is employed to determine spatial relationships among sensors and enhance pattern recognition.
- The processed data is prepared for the leak detection phase.

## c. Data Classification

- The data classification phase draws upon the classified data and knowledge gained during preprocessing.
- It assesses the likelihood of a leak occurrence by comparing real-time sensor inputs to established patterns and insights.
- The system utilizes the principle of Change-Point Detection, monitoring the calibrated threshold value to detect significant differences in flow rate or pressure readings between consecutive sensor readings.
- This phase provides actionable insights to operators and stakeholders, enabling timely intervention and maintenance.

## d. Leak Detection

- At the core of the analytics platform, the leak detection process utilizes classified data and knowledge from preprocessing and classification.
- The system assesses the likelihood of a leak by comparing real-time sensor inputs to established patterns.
- Change-Point Detection is used to identify instances of leakage, allowing for the detection of significant differences in flow rate or pressure readings.
- The results of this phase provide actionable insights to operators and stakeholders, enabling timely intervention and maintenance.

The data analytics layer can preprocess, process, classify, and detect leaks from collected data, ultimately ensuring our system integrity and efficiency.
