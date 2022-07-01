pipeline{
    agent any
    tools{
        nodejs 'NodeJS 12.0.0'
        maven 'Maven 3.0'
    }
    stages{
        stage('Clone Git Repository'){
            steps{ 
                git 'https://github.com/jnkiarie/FtthTracker-Group1.git'
            }
        }
    
        stage('Install Dependencies / Build'){
            steps{
                sh 'npm install'
            }
        }
        stage('Maven Build'){
            steps{
                sh 'mvn clean package'
            }
        }
        stage('Deploy Application to Heroku'){
            steps{
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU' )]){
             sh 'git push https://${HEROKU}@git.heroku.com/capstone-ftth-tracker.git master'
            }
               }
            }
    }
}