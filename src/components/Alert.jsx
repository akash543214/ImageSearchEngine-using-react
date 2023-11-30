

export default function Alert({message})
{
    return (
        <div className={`mt-6 rounded-md border-l-4 border-red-500 bg-red-100 p-4">
        <div className="flex items-center justify-between space-x-4 ${message===false?"invisible":""}`}>

        <div className="flex items-center justify-between space-x-4">
          <div>
          </div>
          <div>
            <p className="text-sm font-medium text-red-600">
    No result found    
                  </p>
          </div>
          <div>
          </div>
        </div>
      </div>
    )
}