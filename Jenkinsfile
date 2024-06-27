pipeline {
    agent any

    // tools {
    //     nodejs "NodeJS 20" // Името на Node.js инсталацията
    // }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/nikolayNachev1990/jenkins.git', credentialsId: 'f5365260-2355-4a6c-9532-a2f3ae632d5f'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            junit 'test-results.xml'
        }
    }
}