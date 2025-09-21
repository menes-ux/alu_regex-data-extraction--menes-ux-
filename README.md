# ALU Regex Data Extraction Web App

Welcome to the **Regex Data Extraction Web App** project! This is a web application designed to demonstrate the power of Regular Expressions (Regex) for validating and extracting specific types of data from large blocks of text. This project was developed as a formative assignment for the ALU software engineering program.



## Project Overview

As a Junior Full Stack Developer on a short-term gig, I was tasked with building a tool to aggregate and extract meaningful information from web data. This application serves as the core component for that task, providing a user-friendly interface to perform data extraction using highly accurate regex patterns.

The application is built entirely with front-end technologies:
* **HTML5:** For the structure and layout of the web page.
* **CSS3:** For styling and making the interface visually appealing.
* **JavaScript:** For DOM manipulation, event handling, and implementing the core regex logic.

## Features

* **User-friendly Interface:** A clean and simple UI to paste text and see results.
* **Real-time Extraction:** Instantly extracts data based on the selected category.
* **Multiple Data Validators:** Implements regex for four common data types:
    * Email Addresses
    * URLs
    * Phone Numbers
    * Hashtags
* **Clear Output:** Displays all matched results in an easy-to-read format.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* A modern web browser (e.g., Google Chrome, Firefox).
* [Visual Studio Code](https://code.visualstudio.com/) installed.
* The [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code.

### Installation & Setup

1.  **Clone the repository:**
    Open your terminal or command prompt and run the following command:
    ```bash
    git clone [https://github.com/](https://github.com/){menes-ux}/alu_regex-data-extraction-{menes-ux}.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd alu_regex-data-extraction-{menes-ux}
    ```

3.  **Open the project in VS Code:**
    ```bash
    code .
    ```

4.  **Run the application with Live Server:**
    * Once the project is open in VS Code, find the `index.html` file in the file explorer.
    * Right-click on `index.html`.
    * Select "**Open with Live Server**" from the context menu.
    * Live Server will automatically open the web application in your default browser.

## How to Use

1.  **Paste Your Text:** Copy the block of text you want to analyze and paste it into the large text area on the left.
2.  **Select Data Type:** Choose the type of data you wish to extract (e.g., "Email," "URL") from the dropdown menu.
3.  **Extract Data:** Click the "**Extract Data**" button.
4.  **View Results:** The application will process the text and display all the matches found in the "Results" box on the right.

