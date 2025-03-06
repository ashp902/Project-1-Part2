import React from 'react'

function Home(){
  return <div>
    <br/><br/>
      <div class="container">
  <div class="row">
    <div class="col">
    <div class="card-body"style={{border:"0.25px solid grey"}}>
    <h5 class="card-title">What is blog writing?</h5>
    <p class="card-text">Blogging refers to writing, photography, and other media that's self-published online. Blogging started as an opportunity for individuals to write diary-style entries, but it has since been incorporated into websites for many businesses.</p>
  </div>
    </div>
    <div class="col">
    <div class="card-body"style={{border:"0.25px solid grey"}}>
    <h5 class="card-title">Top Blog Writers</h5>
    <p class="card-text">Here are the top writing blogs that every writer should follow:</p>
    
    <a href="https://www.writersrepublic.com/blog/top-writing-blogs" alt="main" class="btn btn-info">Top 7 blog Writers</a>
  </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<div className='container'>
  <h4 style={{textAlign:"center"}}>FAQ's</h4>
  <br></br>
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
        >How many posts can I create
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      There is no such limit kept so far, however we are working on free model of DB services so we might take necessary steps on increase of usage in future.<code></code> 
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Will other users be able to edit or delete my content?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        No, any other user than you are not allowed or given access to delete data.
      </div>
    </div>
  </div >
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          What actions are taken on posting irrelevant stuff?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Content is under continuos monitoring, on finding any irrelevant stuff ADMIN will be removing the particular post, and the author of the post will be informed the same via Email.
        <div>
          Users can also report such activities from report page.
          </div> 
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<div>
 

</div>
    </div>
 
  
}
export default Home;
