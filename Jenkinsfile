pipeline{
    agent any
    tools{
        nodejs 'NodeJS 12.0.0'
    }
    stages{
        stage('Clone Git Repo'){
            steps{ 
                git 'https://github.com/jnkiarie/FtthTracker-Group1.git'
            }
        }
    
        stage('Install Dependencies / Build'){
            steps{
                sh 'npm install'
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