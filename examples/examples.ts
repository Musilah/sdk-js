// Import the SDK class from the mainflux-sdk package
import SDK from "../mainflux/sdk";

const defaultUrl = "http://localhost";

const mySdk = new SDK({
  usersUrl: defaultUrl + ":9002",
//   groupsUrl: defaultUrl + ":9002",
//   thingsUrl: defaultUrl + ":9000",
//   channelsUrl: defaultUrl + ":9000",
//   httpadapterUrl: defaultUrl,
//   readersUrl: defaultUrl + ":9011",
//   certsUrl: defaultUrl + ":9019",
//   bootstrapsUrl: defaultUrl + ":9013",
});

// //Things.js examples.

// try {
//     mySdk.things.Create(
//         { "name": "<thing_name>" },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.Get(
//         "<thing_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.CreateBulk(
//         [{ "name": "<thing_name>" }, { "name": "<thing_name>" }],
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.GetAll(
//         { "offset": 0, "limit": 10 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.Disable(
//         "<thing_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.Update(
//         "<thing_id>",
//         { "name": "<thing_name>" },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.UpdateThingSecret(
//         "<thing_id>",
//         { "secret": "<thing_secret>" },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.UpdateThingTags(
//         "<thing_id>",
//         { "tags": ["<foo>", "<bar>"] },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.UpdateThingOwner(
//         "<thing_id>",
//         { "owner": "<thing_owner>" },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.Connect(
//         "<thing_id>",
//         "<channel_id>",
//         ["<actions>"],
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.Disconnect(
//         ["<thing_ids>"],
//         ["<channel_ids>"],
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.Connects(
//         ["<thing_id>", "<thing_id>"],
//         ["<channel_id>", "<channel_id>"],
//         ["<action>", "<action>", "<action>"],
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.GetByChannel(
//         "<thing_id>",
//         { "offset": 0, "limit": 5 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.IdentifyThing(
//         "<thing_secret>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.things.AuthoriseThing(
//         "<thing_id>",
//         "<channel_id>",
//         "<action>",
//         "<enity_type>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// //Users.js

// mySdk.users.Create(
//     { "name": "gemma", "credentials": { "identity": "gemma@email.com", "secret": "12345678" } },
//     ""
// )
// .then((response: any) => {
//     console.log(response);
// })
// .catch((error: any) => {
//     if (error.response) {
//         console.error(error.response);
//     } else {
//         console.error(error.message);
//     }
// });

// try {
//     mySdk.users.Get(
//         "<user_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }


mySdk.users.Login(
    {"credentials": {
        "identity": "odin@example.com", 
        "secret": "12345678"
        }
    }
)
.then((response: any) => {
    console.log(response);
})
.catch((error: any) => {
    if (error.response) {
        console.error(error.response);
    } else {
        console.error(error.message);
    }
});

// try {
//     mySdk.users.RefreshToken(
//         {"id":"user_id"},
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.Update(
//         { "id": "<user_id>", "name": "<user_name>" },
//         "<user_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.UpdateUserIdentity(
//         {"identity": "<user_identity>"},
//         "<user_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.UpdateUserTags(
//         {"tags": ["foo", "bar"] },
//         "<user_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.UpdateUserOwner(
//         { "owner": "<owner_id>" },
//         "<user_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.Disable(
//         { "id": "<user_id>" },
//         "user_id",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.Enable(
//         { "id": "<user_id>" },
//         "<user_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.GetAll(
//         { "offset": 0, "limit": 10 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.UpdateUserPassword(
//         "<old_secret>", "<new_secret>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.Memberships(
//         "<member_id>",
//         { "offset": 0, "limit": 10 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.users.AuthoriseUser(
//         "<user_id>",
//         "<group_id>",
//         "<action>",
//         "<entity_type>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// //Groups.js

// try {
//     mySdk.groups.Create(
//         { "name": "<group_name>" },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Get(
//         "<group_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.GetAll(
//         { "offset": 0, "limit": 10 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Update(
//         "<group_id>",
//         {"name": "<group_name>"},
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Children(
//         "<group_id>",
//         { "offset": 0, "limit": 2, "tree": true },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Parents(
//         "<group_id>",
//         { "offset": 0, "limit": 5 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Assign(
//         "<group_id>",
//         "<member_id>",
//         ["<member_type>"],
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Unassign(
//         "<member_id>",
//         "<group_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Disable(
//         "<group_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.groups.Members(
//         "<group_id>",
//         { "offset": 0, "limit": 10 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// //Channels.js

// try {
//     mySdk.channels.Create(
//         { "name": "<channel_name>" },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.channels.Get(
//         "<channel_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.channels.CreateBulk(
//         [{ "name": "<channel_name>" }, { "name": "<channel_name>" }],
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.channels.GetAll(
//         { "offset": 0, "limit": 10},
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.channels.Update(
//         "<channel_id>",
//         { "name": "<channel_name>" },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.channels.Disable(
//         "<channel_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.channels.GetByThing(
//         "<channel_id>",
//         { "offset": 0, "limit": 5 },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// }
// catch (error) {
//     console.error(error.message);
// }

// //Certs.js

// try {
//     mySdk.certs.Issue(
//         "<thing_id>",
//         "<time_limit>",
//         "<token>"
//     )
//         .then(result => {
//             console.log(result);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.certs.ViewByThing(
//         "<thing_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.certs.ViewBySerial(
//         "<cert_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.certs.Revoke(
//         "<thing_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// // Bootstrap.js

// try {
//     mySdk.bootstrap.Create(
//         {
//             "external_id": "<external_id>",
//             "external_key": "<external_key>",
//             "thing_id": "<thing_id>",
//             "name": "<name>"
//         },
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.bootstrap.Whitelist(
//         {
//             "external_id": "<external_i>",
//             "external_key": "<external_key>",
//             "thing_id": "<thing_id>",
//             "name": "<name>"

//         },
//         "<thing_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.bootstrap.Update(
//         {
//             "name": "<config_name>"
//         },
//         "<thing_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch {
//     console.error(error.message);
// }

// try {
//     mySdk.bootstrap.View(
//         "<thing_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch {
//     console.error(error.message);
// }

// try {
//     mySdk.bootstrap.UpdateCerts(
//         "<config_id>",
//         "<client_cert>",
//         "<client_key>",
//         "<ca>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch {
//     console.error(error.message);
// }

// try {
//     mySdk.bootstrap.Remove(
//         "<config_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch {
//     console.error(error.message);
// }

// try {
//     mySdk.bootstrap.Bootstrap(
//         "<external_id>",
//         "<external_key>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch {
//     console.error(error.message);
// }

// //Messages.js

// try {
//     mySdk.messages.Send(
//         "<channel_id>",
//         ['<msg>'],
//         "<thing_key>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     mySdk.messages.Read(
//         "<channel_id>",
//         "<token>"
//     )
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error.response.data);
//         });
// } catch (error) {
//     console.error(error.message);
// }