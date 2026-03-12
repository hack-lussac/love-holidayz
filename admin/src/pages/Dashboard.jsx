function Dashboard(){

return(

<div>

<div className="cards">

<div className="card">
<p>Total Packages</p>
<h2>24</h2>
</div>

<div className="card">
<p>Blogs</p>
<h2>12</h2>
</div>

<div className="card">
<p>Enquiries</p>
<h2>38</h2>
</div>

</div>

<div className="table-container">

<table>

<thead>
<tr>
<th>Package</th>
<th>Price</th>
<th>State</th>
<th>Action</th>
</tr>
</thead>

<tbody>

<tr>
<td>Kerala Tour</td>
<td>₹12000</td>
<td>Kerala</td>
<td><button>Edit</button></td>
</tr>

<tr>
<td>Goa Beach</td>
<td>₹9000</td>
<td>Goa</td>
<td><button>Edit</button></td>
</tr>

</tbody>

</table>

</div>

</div>

)

}

export default Dashboard