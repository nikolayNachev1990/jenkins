# jenkins

2. Jenkinsfile
Създайте Jenkinsfile в главната директория на проекта:

pipeline {
    agent any

    tools {
        nodejs "nodeJs 20" // Името на Node.js инсталацията
    }

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
3. Настройка на Jenkins с GitHub
Инсталирайте необходимите Jenkins плъгини

Git Plugin
NodeJS Plugin
GitHub Integration Plugin
Pipeline Plugin
Настройка на Node.js в Jenkins

Отидете в Jenkins Dashboard -> Manage Jenkins -> Global Tool Configuration.
Добавете нова Node.js инсталация, като укажете версията и я маркирате да се инсталира автоматично.
Създайте нова Pipeline задача

Отидете в Jenkins Dashboard -> New Item -> Pipeline.
Дайте име на проекта и изберете "Pipeline".
В секцията "Pipeline" изберете "Pipeline script from SCM".
В полето "SCM" изберете "Git".
Въведете URL на вашето GitHub репо: https://github.com/yourusername/my-simple-app.git.
Въведете клониращите креденшъли, ако е необходимо.
Настройка на Webhook в GitHub

Отидете в GitHub репото си -> Settings -> Webhooks -> Add webhook.
Въведете Payload URL: http://your-jenkins-url/github-webhook/.
Изберете Content type: application/json.
Изберете събитията, които да задействат webhook-а (напр. push).
