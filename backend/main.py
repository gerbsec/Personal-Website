from typing import List
from fastapi import FastAPI
from dataclasses import dataclass
from datetime import date,datetime
from pathlib import Path
import frontmatter
import base64

app = FastAPI()
# WRITEUPS_DIR="/opt/writeups"
WRITEUPS_DIR=Path("~/repo/writeups").expanduser()


# @dataclass
class WriteUp:
    title:str
    descr:str
    created_epoc:float
    image:str
    __path:Path

    def __init__(self,title,descr,created,img,path) -> None:
        self.title=title
        self.descr=descr
        self.created_epoc=created
        self.image=img
        self.__path=path

    @staticmethod
    def from_folder(path:Path):
        img = path.joinpath("images","thumbnail.png").read_bytes()
        img = base64.b64encode( img).decode('ascii')
        date_text = frontmatter.load( str(path.joinpath('README.md')))['date']
        writeup_date = float(datetime.strptime(date_text,'%m/%d/%Y').strftime("%s"))
        return WriteUp(str(path.name),'',writeup_date,img,path)

    def markdown(self)->str:
        return frontmatter.load( str(self.__path.joinpath('README.md'))).content

    def __repr__(self) -> str:
        return F"({self.created_epoc}) {self.title}"

    def __lt__(self,other:'WriteUp'):
        return self.created_epoc < other.created_epoc


def writeup_list()->List[WriteUp]:
    writeups = [ 
        WriteUp.from_folder(folder)
        for folder in WRITEUPS_DIR.iterdir()
        if  folder.is_dir() and folder.name!='.git'
    ]
    
    return writeups

def find_writeup(title:str):
    match=[x for x in writeup_list() if x.title==title ]
    return match and match[0] or None

@app.get('/writeups')
def get_recent_writeups():
    return sorted( writeup_list(),reverse=True)

@app.get('/writeups/{limit}')
def get_recent_writeups(limit:int=-1):
    return sorted( writeup_list(),reverse=True)[:limit]

@app.get('/writeup/{title}')
def get_writeup(title:str):
    return find_writeup(title)

@app.get('/writeup/{title}/contents')
def get_writeup_contents(title:str):
    return find_writeup(title).markdown()

