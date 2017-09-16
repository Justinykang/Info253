# Lab 1: What is Git?
Introduction to Git and exploration of browsers

## In this lab you will accomplish the following:
 - Complete setup of your vagrant box
 - Learn to use vagrant
 - Use Git to clone a repository
 - Commit and push changes to your repository to submit your homework

## Complete setup of your vagrant box
 - If you haven't already please download and install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/downloads.html)
 - Open up a terminal window on Mac/Linux, a Command Prompt on Windows
 - Type the command ```mkdir i253``` and press enter. This creates a folder called "i253"
 - Type the command ```cd i253``` and press enter. This now changes the current directory to the newly created "i253"
 - Type the command ```vagrant init hashicorp/precise64```. This creates a vagrant box.
 - Type the command ```vagrant up```. This now builds the vagrant box

## Use Git to clone a repository
First we will need to install Git on our virtual machine. We can do that with the command inside the terminal window:

```
sudo apt install git
```

Now we want to use git to clone the repository we created earlier and finish this lab. We can do so by first telling git who we are:

```
git config --global user.email "[your email]"
git config --global user.name "[your github username]"
```

And then lets take the time to set other time saving configurations:
```
git config --global core.editor pico 
git config --global credential.helper "cache --timeout=3600"
```

The first line sets the editor that you'll be editing git commits to pico, a much simpler terminal text editor than the default vim. The second line will save your credentials for a limited time so that you will not have to enter it over and over again.

Next lets clone this repository. You need to log into your GitHub account, click on the INFO253-FL2016/lab-1-[your username] repository, and then find the green "Clone and Download" button. Copy that url that it shows you.

Now you can run the command:

```
git clone [url]
```

Where [url] is the url that you copied from the GitHub web page. It may ask you for your username and password, and then it should download the repository!

## Commit and push changes to your repository to submit your homework

Now that you have your repository set, you can now: 
 - make changes to these files
 - ```git add [files]``` them to the staging location
 - ```git commit``` them to your repository
 - ```git push origin master``` those changes to your remote repository


## Homework Assignment
For the homework assignment, I would like for you to create a file in this repository called "browsers.txt" right next to the "README.MD" file and in the text file answer the following questions:

 - What is your experience with web architecture. Have you written HTML before? Written JavaScript? etc.
 - What are your favorite features from at least 2 browsers?

You can use Sublime Text to edit files, which can be found by going to the Windows like button and going to Programming -> Sublime Text. You can also type "subl" on the command line. 

Be sure to push your changes to the remote repository. You'll know that you've done it if you can see your changes on the GitHub page.

**Then when you are done be sure to submit the homepage to your repository on our BCourses website.**
