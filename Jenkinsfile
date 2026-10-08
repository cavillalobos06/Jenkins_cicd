pipeline {

    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }

        stage('Install Dependencies'){
            steps{
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }

        stage{Build Project}{
            steps{
                echo 'Compilando Typescript a Javascript'
                sh 'npm run build'
            }
        }

        stage{Deploy / Run}{
            steps{
                echo 'Levantando el servidor en el puerto 3000...'
                sh 'BUILD_ID=dontKillMe nohup npm start > server.log 2>&1 &'
            }
        }
    }

}