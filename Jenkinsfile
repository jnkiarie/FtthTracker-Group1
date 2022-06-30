pipeline{
    agent any
    tools{
        nodejs 'NodeJS 12.0.0'
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
        // stage('Deploy Application to Heroku'){
        //     steps{
        //         withCredentials([usernameColonPassword(credentialsId: 'delani-nodeexpress', variable: 'HEROKU_CREDENTIALS' )]){
        //      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/delani-nodeexpress.git master'
        //     }
            //    }
        //     }
    }
}