pipeline {
    agent any
    environment {
        TRELLO_API_KEY = credentials('64e18f06-78c1-4b51-a631-8498da97e09f')
        TRELLO_API_TOKEN = credentials('87bfda5d-d285-4737-b844-5b60a27b919d')
        TRELLO_USERNAME = credentials('9a862588-1bd3-4494-88b2-fbc678877f00')
        TRELLO_PASSWORD = credentials('e9cd1ab3-5944-4740-9c71-2c01ac9df7da')
    }

    triggers {
        cron('H */2 * * *')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', credentialsId: '37212315-61ce-4ba9-808c-55fe5d502cb9', url: 'https://github.com/Freykaa/automation-framework-practice'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run UI Tests') {
            steps {
                 sh 'npm run test:ui'
            }
        }
        stage('Run API Tests') {
            steps {
                sh 'npm run test:api'
            }
        }
    }
}
