# Emergency Response Feedback Form

## Overview

The **Emergency Response Feedback Form** is a web application designed to collect feedback from users who have experienced an emergency response. The feedback helps evaluate the effectiveness of emergency services and identify areas for improvement.

## Features

- Collects user feedback on various aspects of the emergency response.
- Submits feedback data to a Zapier webhook for further processing or storage.
- Displays a thank you message upon successful form submission.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd your-repository
    ```

3. **Install Dependencies:**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

    ```bash
    npm install
    ```

4. **Install `axios` Dependency:**

    The project uses `axios` to send HTTP requests to the Zapier webhook. Make sure it's installed:

    ```bash
    npm install axios
    ```

## Usage

1. **Start the Server:**

    Run the following command to start the Express server:

    ```bash
    npm start
    ```

    The server will start on [http://localhost:5500](http://localhost:5500).

2. **Access the Form:**

    Open your web browser and go to [http://localhost:5500](http://localhost:5500) to access the feedback form.

3. **Submit Feedback:**

    Fill out the form and submit it. After successful submission, you will see a thank you message.

## Configuration

1. **Update the Zapier Webhook URL:**

    Open `server.js` and replace the `zapierWebhookUrl` variable with your own Zapier webhook URL:

    ```javascript
    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/your-webhook-id/your-webhook-key/";
    ```

2. **Customize the Form:**

    Modify `public/index.html` to change the form fields, styles, or content as needed.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Zapier](https://zapier.com) for providing the webhook service.
- Special thanks to the developers and communities that contribute to open-source tools and resources.

